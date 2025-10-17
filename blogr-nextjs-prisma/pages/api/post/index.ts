import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  
  const session = await getServerSession(req, res, authOptions);

  
  if (!session) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const { title, content } = req.body;

  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: session?.user?.email } },
    },
  });
  
  res.json(result);
}