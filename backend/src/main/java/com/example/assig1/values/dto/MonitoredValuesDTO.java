package com.example.assig1.values.dto;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MonitoredValuesDTO implements Serializable {
    private static final long serialVersionUID = 1L;
    private Long id;
    private Long sensorId;
    private String timeStamp;
    private Double value;
}
