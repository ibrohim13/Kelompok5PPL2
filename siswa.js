const express = require('express');
const router = express.Router();

let siswaData = [
  { id: 1, nama: 'Bambang', kelas: 'XII IPA' },
  { id: 2, nama: 'Bimbang', kelas: 'XI IPS' }
];

// GET all students
router.get('/', (req, res) => {
  res.json(siswaData);
});

// GET a single student by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const siswa = siswaData.find(s => s.id === id);
  if (!siswa) {
    return res.status(404).json({ message: 'Siswa not found' });
  }
  res.json(siswa);
});

// CREATE a new student
router.post('/', (req, res) => {
  const { nama, kelas } = req.body;
  const id = siswaData.length + 1;
  const newSiswa = { id, nama, kelas };
  siswaData.push(newSiswa);
  res.status(201).json(newSiswa);
});

// UPDATE a student
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nama, kelas } = req.body;
  let siswa = siswaData.find(s => s.id === id);
  if (!siswa) {
    return res.status(404).json({ message: 'Siswa not found' });
  }
  siswa.nama = nama;
  siswa.kelas = kelas;
  res.json(siswa);
});

// DELETE a student
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  siswaData = siswaData.filter(s => s.id !== id);
  res.json({ message: 'Siswa deleted successfully' });
});

module.exports = router;
