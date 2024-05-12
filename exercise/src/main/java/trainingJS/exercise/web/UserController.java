package trainingJS.exercise.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import trainingJS.exercise.domain.User;

@RestController
@RequestMapping("/users")
public class UserController {
    @GetMapping("/exists")
    public boolean getUserExists(User user){
        System.out.println(user.getUsername() + user.getPassword());
        return true;
    }
}
