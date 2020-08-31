<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_Peminjaman_alat extends CI_Model {

	public function getData($value='')
	{
		$this->db->from('peminjaman_alat pe');
		$this->db->order_by('pe.id_peminjaman', 'desc');
		return $this->db->get();
	}

	public function insertData($data='')
	{
		
        $this->db->insert('peminjaman_alat',$data);
       
	}

	public function updateData($data='')
	{
		 $this->db->where('id_peminjaman',$data['id_peminjaman']);
            $this->db->update('peminjaman_alat',$data);
	}

	public function deleteData($id='')
	{
		$this->db->where('id_peminjaman', $id);
        $this->db->delete('peminjaman_alat');
	}
	public function kode_peminjaman()
    {
        $sql = "SELECT MAX(MID(id_peminjaman,12,4)) AS id_peminjaman FROM peminjaman_alat WHERE MID(id_peminjaman,6,6) = DATE_FORMAT(CURDATE(), '%y%m%d')";
        $query = $this->db->query($sql);
        if($query->num_rows() > 0 ){
            $row = $query->row();
            $n = ((int)$row->id_peminjaman) + 1;
            $no = sprintf("%'.04d", $n);
        }else{
            $no = "0001";
        }
		$kode_peminjaman = "K-PJM".date('ymd').$no;
		return $kode_peminjaman;
	}
	public function check()
    {
        $kode = "Check";
        return $kode;
    }	
}


/* End of file m_peminjaman.php */
/* Location: ./application/models/master/m_peminjaman.php */
