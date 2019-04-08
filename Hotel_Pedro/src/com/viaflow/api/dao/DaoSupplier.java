package com.viaflow.api.dao;


import com.viaflow.api.model.*;
import com.viaflow.api.dao.DaoQuarto;
import com.viaflow.api.dao.DaoMetodoPagamento;
import com.viaflow.api.dao.DaoHospede;
import com.viaflow.api.dao.DaoServico;
import com.viaflow.api.dao.DaoRegistrarQuarto;

public class DaoSupplier {
	
	public static DaoBase<Hospede> getDaoHospede() {
		return new DaoHospede();
	}
	public static DaoBase<Quarto> getDaoQuarto() {
		return new DaoQuarto();
	}
	public static DaoBase<MetodoPagamento> getDaoMetodoPagamento() {
		return new DaoMetodoPagamento();
	}
	public static DaoBase<TipoQuarto> getDaoTipoQuarto() {
		return new DaoTipoQuarto();
	}
	public static DaoBase<Servicos> getDaoServico() {
		return new DaoServico();
	}
	public static DaoRegistrarQuarto getDaoRegistrarQuarto() {
		return new DaoRegistrarQuarto();
	}
	public static DaoBase<ComprarServico> getDaoComprarServico() {
		return new DaoComprarServico();
	}
	
}
