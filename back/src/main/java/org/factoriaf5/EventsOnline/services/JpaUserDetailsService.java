package org.factoriaf5.EventsOnline.services;

import org.factoriaf5.EventsOnline.models.SecurityUser;
import org.factoriaf5.EventsOnline.repositories.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JpaUserDetailsService implements UserDetailsService{
    UserRepository userRepository;
    
    public JpaUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        
        return userRepository
            .findByUsername(username)
            .map(SecurityUser::new)
            .orElseThrow(() -> new UsernameNotFoundException("User not found:" + username));

    }
    
}
