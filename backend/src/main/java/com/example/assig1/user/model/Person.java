package com.example.assig1.user.model;

import lombok.*;

import com.example.assig1.user.model.Role;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username")
        })
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
@Data
@ToString
public class Person {
        @Id
        @GeneratedValue
        private Long id;

        @Column(nullable = false, length = 120)
        private String address;

        @Column(nullable = false)
        private String birthday;

        @Column(nullable = false, length = 120)
        private String name;

//        @Column(nullable = false)
//        private Boolean type;

        @Column(nullable = false, length = 20)
        private String username;

        @Column(nullable = false, length = 120)
        private String password;

        @ManyToMany(fetch = FetchType.EAGER)
        @JoinTable(name = "user_roles",
                joinColumns = @JoinColumn(name = "user_id"),
                inverseJoinColumns = @JoinColumn(name = "role_id"))
        @Builder.Default
        private List<Role> roles = new ArrayList<>();
}
