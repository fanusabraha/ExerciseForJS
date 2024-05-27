package trainingJS.exercise.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import trainingJS.exercise.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    User findByUsername(String username);
}
