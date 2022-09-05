import { NextApiRequest, NextApiResponse } from 'next';

import { queryIndexForMatches } from '../../utils';

export default function search (req: NextApiRequest, res: NextApiResponse) {
  const query   = req.query.q as string;
  const matches = queryIndexForMatches(query);

  res.status(200).json({ matches });
}
