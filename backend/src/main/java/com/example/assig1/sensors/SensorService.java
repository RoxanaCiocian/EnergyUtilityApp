package com.example.assig1.sensors;

import com.example.assig1.devices.DeviceService;
import com.example.assig1.devices.model.Device;
import com.example.assig1.sensors.dto.SensorDTO;
import com.example.assig1.sensors.mapper.SensorMapperFunc;
import com.example.assig1.sensors.model.Sensor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SensorService {
    private final SensorRepository sensorRepository;
    private final DeviceService deviceService;

    public Sensor findById(Long id){
        return sensorRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Sensor not found with id:" + id));
    }

    public List<SensorDTO> allSensors(){
        return sensorRepository.findAll()
                .stream().map(SensorMapperFunc::toDTO)
                .collect(Collectors.toList());
    }

    public List<SensorDTO> allSensorsForDevice(Long id){
        return sensorRepository.findByDeviceId(id)
                .stream().map(SensorMapperFunc::toDTO)
                .collect(Collectors.toList());
    }

    public SensorDTO create(SensorDTO sensorDTO){
        Device device = deviceService.findById(sensorDTO.getDeviceId());
        return SensorMapperFunc.toDTO(sensorRepository.save(Sensor.builder()
                .description(sensorDTO.getDescription())
                .maxValue(sensorDTO.getMaxValue())
                .deviceId(device)
                .build()
        ));
    }

    public SensorDTO update(Long id, SensorDTO sensorDTO){
        Sensor sensor = findById(id);

        sensor.setDescription(sensorDTO.getDescription());
        sensor.setMaxValue(sensorDTO.getMaxValue());

        return SensorMapperFunc.toDTO(sensorRepository.save(sensor));
    }

    public void deleteAll(){
        sensorRepository.deleteAll();
    }

    public void deleteById(Long id){
        sensorRepository.deleteById(id);
    }
}
