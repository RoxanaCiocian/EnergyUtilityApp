package com.example.assig1.devices;

import com.example.assig1.devices.dto.DeviceDTO;
import com.example.assig1.devices.mapper.DeviceMapperFunc;
import com.example.assig1.devices.model.Device;
import com.example.assig1.user.UserService;
import com.example.assig1.user.model.Person;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DeviceService {
    private final DeviceRepository deviceRepository;
    private final UserService userService;

    public Device findById(Long id){
        return deviceRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Device not found with id:" + id));
    }

    public List<DeviceDTO> allDevices(){
        return deviceRepository.findAll()
                .stream().map(DeviceMapperFunc::toDTO)
                .collect(Collectors.toList());
    }

    public List<DeviceDTO> allDevicesForUser(Long id){
        return deviceRepository.findByUserId(id)
                .stream().map(DeviceMapperFunc::toDTO)
                .collect(Collectors.toList());
    }

    public DeviceDTO create(DeviceDTO deviceDTO){
        Person person = userService.findById(deviceDTO.getUserId());

        return DeviceMapperFunc.toDTO(deviceRepository.save(Device.builder()
                .description(deviceDTO.getDescription())
                .location(deviceDTO.getLocation())
                .baseline(deviceDTO.getBaseline())
                .userId(person)
                .maxEnergyConsumption(deviceDTO.getMaxEnergyConsumption())
                .build()));
    }

    public DeviceDTO update(Long id, DeviceDTO deviceDTO){
        Device device = findById(id);

        device.setDescription(deviceDTO.getDescription());
        device.setLocation(deviceDTO.getLocation());
        device.setMaxEnergyConsumption(deviceDTO.getMaxEnergyConsumption());
        device.setBaseline(deviceDTO.getBaseline());

        return DeviceMapperFunc.toDTO(deviceRepository.save(device));
    }

    public  void deleteAll() {
        deviceRepository.deleteAll();
    }

    public void deleteById(Long id){
        deviceRepository.deleteById(id);
    }

}
