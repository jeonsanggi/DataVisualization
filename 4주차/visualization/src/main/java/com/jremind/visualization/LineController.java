package com.jremind.visualization;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LineController {
	private static final Logger logger = LoggerFactory.getLogger(LineController.class);
	    
	
		@RequestMapping(value = "/lineChart", method = RequestMethod.GET)
		public String line(Locale locale, Model model) {
	 
	        logger.info("line");
	        
	 
	        return "lineChart";
	    }

}
