package com.example.assig1.sensors;

import com.example.assig1.devices.model.Device;
import com.example.assig1.sensors.model.Sensor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SensorRepository extends JpaRepository<Sensor, Long> {
    Optional<Sensor> findByDescription(String description);
    Optional<Sensor> findById(Long id);

    //@Query(value = "select * from Sensor sensor where sensor.device_id = ?1", nativeQuery = true)
    @Query(value = "select * from Sensor sensor join Device device on device.id = sensor.device_id join Person person on person.id = device.user_id where person.id = ?1", nativeQuery = true)
    List<Sensor> findByDeviceId(Long id);
}
