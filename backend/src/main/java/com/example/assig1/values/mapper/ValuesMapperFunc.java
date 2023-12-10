package com.example.assig1.values.mapper;

import com.example.assig1.sensors.SensorRepository;
import com.example.assig1.sensors.model.Sensor;
import com.example.assig1.values.dto.MonitoredValuesDTO;
import com.example.assig1.values.model.MonitoredValues;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityNotFoundException;

@RequiredArgsConstructor
public class ValuesMapperFunc {
    private final SensorRepository sensorRepository;
    public static MonitoredValuesDTO toDTO(MonitoredValues monitoredValues) {
        if ( monitoredValues == null ) {
            return null;
        }

        MonitoredValuesDTO.MonitoredValuesDTOBuilder monitoredValuesDTO = MonitoredValuesDTO.builder();

        monitoredValuesDTO.id( monitoredValues.getId() );
        monitoredValuesDTO.timeStamp( monitoredValues.getTimeStamp() );
        monitoredValuesDTO.value( monitoredValues.getValue() );

        monitoredValuesDTO.sensorId( monitoredValues.getSensorId().getId() );

        return monitoredValuesDTO.build();
    }

    public MonitoredValues fromDTO(MonitoredValuesDTO monitoredValuesDTO) {
        if ( monitoredValuesDTO == null ) {
            return null;
        }

        MonitoredValues.MonitoredValuesBuilder monitoredValues = MonitoredValues.builder();

        Sensor sensor = sensorRepository.findById(monitoredValuesDTO.getSensorId()).orElseThrow(() -> new EntityNotFoundException("Value not found: " + monitoredValuesDTO.getSensorId()));

        monitoredValues.sensorId(sensor);
        monitoredValues.id( monitoredValuesDTO.getId() );
        monitoredValues.timeStamp( monitoredValuesDTO.getTimeStamp() );
        monitoredValues.value( monitoredValuesDTO.getValue() );

        return monitoredValues.build();
    }
}
