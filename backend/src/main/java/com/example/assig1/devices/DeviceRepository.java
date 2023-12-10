package com.example.assig1.devices;

import com.example.assig1.devices.model.Device;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DeviceRepository extends JpaRepository <Device, Long> {
    Optional<Device> findByDescription(String description);

    @Query(value = "select * from Device device where device.user_id = ?1", nativeQuery = true)
    List<Device> findByUserId(Long id);

   // @Query(value = "select * from Sensor sensor join Device device where ")

}
