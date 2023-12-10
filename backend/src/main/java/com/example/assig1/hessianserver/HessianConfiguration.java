package com.example.assig1.hessianserver;

import com.example.assig1.values.MonitoredValuesService;
import com.example.assig1.values.dto.MonitoredValuesDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.remoting.caucho.HessianServiceExporter;
import org.springframework.remoting.support.RemoteExporter;

@Configuration
@RequiredArgsConstructor
public class HessianConfiguration {
    private final MonitoredValuesService monitoredValuesService;
    @Bean(name = "/hellohessian")
    RemoteExporter sayHelloServiceHessian() {
        HessianServiceExporter exporter = new HessianServiceExporter();
        exporter.setService(new HessianServerImpl(monitoredValuesService));
        exporter.setServiceInterface(HessianServer.class);
        return exporter;
    }
}
