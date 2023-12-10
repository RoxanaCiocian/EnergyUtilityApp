package com.example.assig1.user.mapper;

import com.example.assig1.user.dto.UserListDTO;
import com.example.assig1.user.dto.UserMinimalDTO;
import com.example.assig1.user.model.Person;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
public class UserMapperFunc {
    public static UserMinimalDTO userMinimalFromUser(Person person) {
        if ( person == null ) {
            return null;
        }

        UserMinimalDTO.UserMinimalDTOBuilder<?, ?> userMinimalDTO = UserMinimalDTO.builder();

        userMinimalDTO.username( person.getUsername() );
        userMinimalDTO.id( person.getId() );

        return userMinimalDTO.build();
    }

    public UserListDTO userListDtoFromUser(Person person) {
        if ( person == null ) {
            return null;
        }

        UserListDTO.UserListDTOBuilder<?, ?> userListDTO = UserListDTO.builder();

        userListDTO.username( person.getUsername() );
        userListDTO.id( person.getId() );
        userListDTO.password( person.getPassword() );
        userListDTO.name( person.getName() );
        userListDTO.address( person.getAddress() );
        userListDTO.birthday( person.getBirthday() );

        return userListDTO.build();
    }

    public Person userFromListDTO(UserListDTO userListDTO) {
        if ( userListDTO == null ) {
            return null;
        }

        Person.PersonBuilder person = Person.builder();

        person.username( userListDTO.getUsername() );
        person.id( userListDTO.getId() );
        person.address( userListDTO.getAddress() );
        person.birthday( userListDTO.getBirthday() );
        person.name( userListDTO.getName() );
        person.password( userListDTO.getPassword() );

        return person.build();
    }
}
