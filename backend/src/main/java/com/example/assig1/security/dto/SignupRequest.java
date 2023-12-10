package com.example.assig1.security.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
@Builder
public class SignupRequest {
    private String username;
    private String name;
    private String birthday;
    private String address;
    //private String email;
    private String password;
    private List<String> roles;
}

