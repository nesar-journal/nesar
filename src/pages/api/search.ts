import { NextApiRequest, NextApiResponse } from 'next';

import { queryCacheForMatches } from '../../utils';

export default function search (req: NextApiRequest, res: NextApiResponse) {
  const query   = req.query.q as string;
  const matches = queryCacheForMatches(query);

  res.status(200).json({ matches });
}
