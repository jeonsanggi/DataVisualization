package com.jremind.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.jremind.dao.WineDAO;
import com.jremind.vo.WineVO;

@Service
public class WineServiceImpl implements WineService{
	@Inject
	private WineDAO dao;
	
	@Override
	public List<WineVO> selectWine() throws Exception{
		return dao.selectWine();
	}

}
