package com.example.assig1.sensors.dto;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SensorDTO {
    private Long id;
    private String description;
    private float maxValue;
    private Long deviceId;
}
