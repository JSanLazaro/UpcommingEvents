package org.factoriaf5.EventsOnline.repositories;
import org.factoriaf5.EventsOnline.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long>{
    
}
