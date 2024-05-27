package trainingJS.exercise.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Column(unique = true)
    private String username;
    private String password;
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }
}
