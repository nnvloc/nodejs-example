import { Router } from 'express';
import Controller from './controller';


// RESTFUL API
// Get - get data tu server
// POST - create data moi
// PUT - Update data
// DELETE - Remove data
// + Soft remove: mark record removed
// + Hard remove: remove out of db completetly
// PATCH - Update a part of record's columns
// OPTIONS

const router = new Router();

// Get users
router.get('/', (req, res, next) => {
  // pre-process
  return Controller.getUsers(req, res, next);
});

router.post('/alan', function(req, res, next) {res.send('alan')});
router.post('/', Controller.createUser);

// Get user by id
router.get('/:id', Controller.getUserById);

export default router;