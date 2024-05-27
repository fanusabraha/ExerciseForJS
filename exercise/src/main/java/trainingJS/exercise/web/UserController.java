package trainingJS.exercise.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import trainingJS.exercise.domain.User;
import trainingJS.exercise.service.UserService;

@Controller
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/exists")
    @ResponseBody
    // telling which endpoint returns but not for view
    public boolean getExists(User user){
        System.out.println(user.getUsername() + user.getPassword());
        return true;
    }
    @PostMapping("/exists")
    @ResponseBody
    public boolean postExists(@RequestBody User user){
        user = userService.findByUsername(user.getUsername());
        System.out.println("data got from server" + user.getUsername() + user.getPassword());
        return (user != null);
    }
    @GetMapping("register")
    public String registerNewUser(ModelMap model) {
    User user = new User();
    model.put("user",user);
    return "register";
    }
    @PostMapping("register")
    public String registerTheUser(User user){
        userService.save(user);
        return "redirect:/login";
    }
}
