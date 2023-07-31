package org.factoriaf5.EventsOnline.configurations;

import org.springframework.context.annotation.Configuration;
// import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CORSConfig implements WebMvcConfigurer{
    private String originAllowed = "http://localhost:4200";
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(originAllowed)
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }

}