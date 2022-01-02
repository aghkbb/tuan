package com.aghk.tuanback;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/meal")
public class MealController {

    @Autowired
    private MealRepository mealRepository;

    private static final Logger log = LoggerFactory.getLogger(MealController.class);

    @PostMapping(path = "/add") // Map ONLY POST Requests
    public @ResponseBody Meal addNewMeal(@RequestBody Meal meal) {
        System.out.println(meal.toString());
        return mealRepository.save(meal);
    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Meal> getAllMeals() {
        return mealRepository.findAll();
    }

    @DeleteMapping(path = "/delete/{id}")
    public @ResponseBody ResponseEntity<String> deleteMeal(@PathVariable("id") String id) {
        log.info("MealController.deleteMeal("+id+")");
        mealRepository.deleteById(Integer.parseInt(id));
        return new ResponseEntity<String>(HttpStatus.OK);
    }

    @GetMapping(path = "/meal/{id}")
    public @ResponseBody Optional<Meal> getMealById(@PathVariable("id") int id) {
        System.out.println("REST controller received ID: " + id);
        return mealRepository.findById(id);
    }

}
