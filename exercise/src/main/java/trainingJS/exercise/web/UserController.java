package trainingJS.exercise.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import trainingJS.exercise.domain.User;

@RestController
@RequestMapping("/users")
public class UserController {
    @GetMapping("/exists")
    public boolean getExists(User user){
        System.out.println(user.getUsername() + user.getPassword());
        return true;
    }
    @PostMapping("/exists")
    public boolean postExists(@RequestBody User user){
        System.out.println("data got from server" + user.getUsername() + user.getPassword());
        return true;
    }
}
