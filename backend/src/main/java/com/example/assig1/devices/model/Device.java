package com.example.assig1.devices.model;

import com.example.assig1.user.model.Person;
import lombok.*;

import javax.persistence.*;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
@Data
@ToString
public class Device {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false, length = 120)
    private String description;

    @Column(nullable = false, length = 120)
    private String location;

    @Column(nullable = false)
    private float maxEnergyConsumption;

    @Column(nullable = false)
    private float baseline;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private Person userId;
}
