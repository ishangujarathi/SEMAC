import marks from '../../../data/marks';

export default function handler(req, res) {
  const { roll } = req.body;
  res.status(200).json(marks.find(roll));
}
