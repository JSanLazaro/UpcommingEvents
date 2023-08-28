package org.factoriaf5.EventsOnline.repositories;
import org.factoriaf5.EventsOnline.models.OnlineEvent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<OnlineEvent,Long>{
    
}
