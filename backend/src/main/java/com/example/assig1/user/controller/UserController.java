package com.example.assig1.user.controller;

import com.example.assig1.user.UserService;
import com.example.assig1.user.dto.UserListDTO;
import lombok.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.example.assig1.UrlMapping.*;

@RestController
@RequestMapping(USERS)
@RequiredArgsConstructor
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {
    private final UserService userService;

    @GetMapping
    public List<UserListDTO> allUsers() {
        return userService.allUsersForList();
    }

    @PostMapping
    public UserListDTO createUser(@RequestBody UserListDTO userListDTO){
        return userService.create(userListDTO);
    }

    @PutMapping(ENTITY)
    public UserListDTO updateUser(@PathVariable Long id, @RequestBody UserListDTO userListDTO){
        return userService.update(id, userListDTO);
    }

    @DeleteMapping
    public void deleteAll(){
        userService.deleteAll();
    }

    @DeleteMapping(ENTITY)
    public void deleteUser(@PathVariable Long id){
        userService.deleteById(id);
    }
}
