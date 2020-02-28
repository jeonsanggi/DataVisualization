package com.jremind.visualization;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class barController {
	private static final Logger logger = LoggerFactory.getLogger(barController.class);
	    
	
		@RequestMapping(value = "/barChart", method = RequestMethod.GET)
		public String line(Locale locale, Model model) {
	 
	        logger.info("bar");
	        
	 
	        return "barChart";
	    }

}
