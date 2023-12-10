package com.example.assig1.devices.mapper;

import com.example.assig1.devices.dto.DeviceDTO;
import com.example.assig1.devices.model.Device;
import com.example.assig1.user.UserRepository;
import com.example.assig1.user.model.Person;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityNotFoundException;

@RequiredArgsConstructor
public class DeviceMapperFunc {
    private final UserRepository userRepository;
    public static DeviceDTO toDTO(Device device) {
        if ( device == null ) {
            return null;
        }

        DeviceDTO.DeviceDTOBuilder deviceDTO = DeviceDTO.builder();

        deviceDTO.id( device.getId() );
        deviceDTO.description( device.getDescription() );
        deviceDTO.location( device.getLocation() );
        deviceDTO.maxEnergyConsumption( device.getMaxEnergyConsumption() );
        deviceDTO.baseline( device.getBaseline() );

        deviceDTO.userId( device.getUserId().getId() );

        return deviceDTO.build();
    }

    public Device fromDTO(DeviceDTO deviceDTO) {
        if ( deviceDTO == null ) {
            return null;
        }

        Device.DeviceBuilder device = Device.builder();

        Person person = userRepository.findById(deviceDTO.getUserId()).orElseThrow(() -> new EntityNotFoundException("User not found: " + deviceDTO.getUserId()));

        device.userId( person );
        device.id( deviceDTO.getId() );
        device.description( deviceDTO.getDescription() );
        device.location( deviceDTO.getLocation() );
        device.maxEnergyConsumption( deviceDTO.getMaxEnergyConsumption() );
        device.baseline( deviceDTO.getBaseline() );

        return device.build();
    }
}
