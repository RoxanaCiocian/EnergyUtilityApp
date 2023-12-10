package com.example.assig1.devices.dto;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class DeviceDTO {
    private Long id;
    private String description;
    private String location;
    private float maxEnergyConsumption;
    private float baseline;
    private Long userId;
}
