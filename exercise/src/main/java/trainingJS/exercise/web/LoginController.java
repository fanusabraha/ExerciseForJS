package trainingJS.exercise.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import trainingJS.exercise.domain.User;

@Controller
public class LoginController {
    @GetMapping ("/login")
    public String createLogin(ModelMap map){
        User user= new User();
        map.put("user",user);
        return "login";
    }
}
