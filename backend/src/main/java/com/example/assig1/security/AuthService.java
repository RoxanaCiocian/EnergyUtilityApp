package com.example.assig1.security;

import com.example.assig1.security.dto.SignupRequest;
import com.example.assig1.user.RoleRepository;
import com.example.assig1.user.UserRepository;
import com.example.assig1.user.model.ERole;
import com.example.assig1.user.model.Role;
import com.example.assig1.user.model.Person;

import lombok.RequiredArgsConstructor;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    private final PasswordEncoder encoder;


    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    public void register(SignupRequest signUpRequest) {
        Person user = Person.builder()
                .username(signUpRequest.getUsername())
                .password(encoder.encode(signUpRequest.getPassword()))
                .name(signUpRequest.getName())
                .birthday(signUpRequest.getBirthday())
                .address(signUpRequest.getAddress())
                .build();

        List<String> rolesStr = signUpRequest.getRoles();
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

        user.setRoles(roles);
        userRepository.save(user);
    }
}
