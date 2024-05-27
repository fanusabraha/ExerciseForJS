package trainingJS.exercise.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import trainingJS.exercise.domain.User;
import trainingJS.exercise.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public User save (User user){
        return userRepository.save(user);
    }

    public User findByUsername( String username) {
        return userRepository.findByUsername(username);
    }
}
