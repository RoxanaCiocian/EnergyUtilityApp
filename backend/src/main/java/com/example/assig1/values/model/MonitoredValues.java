package com.example.assig1.values.model;

import com.example.assig1.sensors.model.Sensor;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
@Data
@ToString
public class MonitoredValues {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "sensor_id")
    private Sensor sensorId;

    @Column(nullable = false)
    private String timeStamp;

    @Column(nullable = false)
    private Double value;

}
