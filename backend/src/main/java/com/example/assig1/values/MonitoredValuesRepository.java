package com.example.assig1.values;

import com.example.assig1.values.model.MonitoredValues;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MonitoredValuesRepository extends JpaRepository<MonitoredValues, Long> {
    @Query(value = "select * from MonitoredValues monitoredValues where monitoredValues.sensor_id = ?1", nativeQuery = true)
    List<MonitoredValues> findBySensorId(Long id);
}
