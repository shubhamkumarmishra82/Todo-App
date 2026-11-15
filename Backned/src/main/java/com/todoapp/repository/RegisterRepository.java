package com.todoapp.repository;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.todoapp.entity.Register;
@Repository
public interface RegisterRepository extends JpaRepository<Register , Long> {
	Optional<Register> findByEmail(String email);
	boolean existsByEmail(String email);
}
