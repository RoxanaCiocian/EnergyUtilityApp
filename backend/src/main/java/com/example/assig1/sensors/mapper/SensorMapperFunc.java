package com.example.assig1.sensors.mapper;

import com.example.assig1.devices.DeviceRepository;
import com.example.assig1.devices.model.Device;
import com.example.assig1.sensors.dto.SensorDTO;
import com.example.assig1.sensors.model.Sensor;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityNotFoundException;

@RequiredArgsConstructor
public class SensorMapperFunc {
    private final DeviceRepository deviceRepository;

    public static SensorDTO toDTO(Sensor sensor) {
        if ( sensor == null ) {
            return null;
        }

        SensorDTO.SensorDTOBuilder sensorDTO = SensorDTO.builder();

        sensorDTO.id( sensor.getId() );
        sensorDTO.description( sensor.getDescription() );
        sensorDTO.maxValue( sensor.getMaxValue() );

        sensorDTO.deviceId( sensor.getDeviceId().getId() );

        return sensorDTO.build();
    }

    public Sensor fromDTO(SensorDTO sensorDTO) {
        if ( sensorDTO == null ) {
            return null;
        }

        Sensor.SensorBuilder sensor = Sensor.builder();

        Device device = deviceRepository.findById(sensorDTO.getDeviceId()).orElseThrow(() -> new EntityNotFoundException("Device not found: " + sensorDTO.getDeviceId()));

        sensor.deviceId( device );
        sensor.id( sensorDTO.getId() );
        sensor.description( sensorDTO.getDescription() );
        sensor.maxValue( sensorDTO.getMaxValue() );

        return sensor.build();
    }
}
