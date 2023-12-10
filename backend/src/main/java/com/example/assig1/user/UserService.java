package com.example.assig1.user;

import com.example.assig1.user.dto.UserListDTO;
import com.example.assig1.user.dto.UserMinimalDTO;
import com.example.assig1.user.mapper.UserMapperFunc;
import com.example.assig1.user.model.ERole;
import com.example.assig1.user.model.Person;
import com.example.assig1.user.model.Role;
import lombok.RequiredArgsConstructor;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
@RequiredArgsConstructor

public class UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder encoder;
    private final UserMapperFunc userMapperFunc;

    public Person findById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found: " + id));
    }

    public Person findByUsername(String username){
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found with username: " + username));
    }

    public List<UserMinimalDTO> allUsersMinimal() {
        return userRepository.findAll()
                .stream().map(UserMapperFunc::userMinimalFromUser)
                .collect(toList());
    }


    public List<UserListDTO> allUsersForList() {
        return userRepository.findAll()
                .stream().map(userMapperFunc::userListDtoFromUser)
                .collect(toList());
    }

    public UserListDTO create(UserListDTO userListDTO){
        Person person = userMapperFunc.userFromListDTO(userListDTO);
        person.setPassword(encoder.encode(userListDTO.getPassword()));

        List<String> rolesStr = userListDTO.getRoles();
        List<Role> roles = new ArrayList<>();

        if (rolesStr == null) {
            Role defaultRole = roleRepository.findByName(ERole.CLIENT)
                    .orElseThrow(() -> new RuntimeException("Cannot find CLIENT role"));
            roles.add(defaultRole);
        } else {
            rolesStr.forEach(r -> {
                Role ro = roleRepository.findByName(ERole.valueOf(r))
                        .orElseThrow(() -> new RuntimeException("Cannot find role: " + r));
                roles.add(ro);
            });
        }

        person.setRoles(roles);
        userRepository.save(person);

        return userMapperFunc.userListDtoFromUser(person);

    }

    public UserListDTO update(Long id, UserListDTO userListDTO){
        Person person = findById(id);

        person.setUsername(userListDTO.getUsername());
        person.setAddress(userListDTO.getAddress());
        person.setName(userListDTO.getName());
        person.setBirthday(userListDTO.getBirthday());

        if(!userListDTO.getPassword().equals(""))
        {
            person.setPassword(userListDTO.getPassword());
        }

        return userMapperFunc.userListDtoFromUser(userRepository.save(person));
    }

    public void deleteAll(){
        userRepository.deleteAll();
    }

    public void deleteById(Long id){
        userRepository.deleteById(id);
    }

}
