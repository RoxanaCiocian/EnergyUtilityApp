package com.example.assig1.sensors.model;

import com.example.assig1.devices.model.Device;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.*;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
@Data
@ToString
public class Sensor {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false, length = 120)
    private String description;

    @Column(nullable = false)
    private float maxValue;

    @OneToOne
    @JoinColumn(name = "device_id")
    private Device deviceId;
}
