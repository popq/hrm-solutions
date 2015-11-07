callback({
  "levelNumber": 20,
  "size": 157,
  "steps": 86,
  "successRatio": 1,
  "type": "specific",
  "author": "mschordan",
  "hash": "481f3e60478b3f551c98d6d6d7e1510e",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 20-Multiplication-Workshop - SIZE 157/15 - SPEED 72/109 --\n\n-- This solution is level-specific (quality-limited input) and assumes input\n-- values of 0-9.\n\ne:\na:\n    INBOX   \n    JUMPZ    out1\n    COPYTO   0\n    INBOX   \n    JUMPZ    out2\n    COPYTO   1\n    SUB      0\n    JUMPN    neg\n\n    BUMPDN   0\n    JUMPZ      a1\n    BUMPDN   0\n    JUMPZ      a2\n    BUMPDN   0\n    JUMPZ      a3\n    BUMPDN   0\n    JUMPZ      a4\n    BUMPDN   0\n    JUMPZ      a5\n    BUMPDN   0\n    JUMPZ      a6\n    BUMPDN   0\n    JUMPZ      a7\n    BUMPDN   0\n    JUMPZ      a8\n    JUMP       a9\n\nneg:\n    BUMPDN   1\n    JUMPZ      b1\n    BUMPDN   1\n    JUMPZ      b2\n    BUMPDN   1\n    JUMPZ      b3\n    BUMPDN   1\n    JUMPZ      b4\n    BUMPDN   1\n    JUMPZ      b5\n    BUMPDN   1\n    JUMPZ      b6\n    BUMPDN   1\n    JUMPZ      b7\n    BUMPDN   1\n    JUMPZ      b8\n    JUMP       b9\n\nout1:\n    OUTBOX  \n    INBOX   \n    JUMP     a\n\na1:\n    COPYFROM 1\nout2:\n    OUTBOX\n    JUMP     e\na2:\n    COPYFROM 1\n    ADD      1\n    OUTBOX\n    JUMP     e\na3:\n    COPYFROM 1\n    ADD      1\n    ADD      1\n    OUTBOX\n    JUMP     e\na4:\n    COPYFROM 1\n    ADD      1\n    ADD      1\n    ADD      1\n    OUTBOX\n    JUMP     e\na5:\n    COPYFROM 1\n    ADD      1\n    ADD      1\n    ADD      1\n    ADD      1\n    OUTBOX\n    JUMP     e\na6:\n    COPYFROM 1\n    ADD      1\n    ADD      1\n    COPYTO   3\n    ADD      3\n    OUTBOX\n    JUMP     e\na7:\n    COPYFROM 1\n    ADD      1\n    ADD      1\n    COPYTO   3\n    ADD      3\n    ADD      1\n    OUTBOX\n    JUMP     e\na8:\n    COPYFROM 1\n    ADD      1\n    ADD      1\n    ADD      1\n    COPYTO   3\n    ADD      3\n    OUTBOX\n    JUMP     e\na9:\n    COPYFROM 1\n    ADD      1\n    ADD      1\n    COPYTO   3\n    ADD      3\n    ADD      3\n    OUTBOX\n    JUMP     e\n\nb1:\n    COPYFROM 0\n    OUTBOX\n    JUMP     e\nb2:\n    COPYFROM 0\n    ADD      0\n    OUTBOX\n    JUMP     e\nb3:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    OUTBOX\n    JUMP     e\nb4:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    OUTBOX\n    JUMP     e\nb5:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    ADD      0\n    OUTBOX\n    JUMP     e\nb6:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    OUTBOX\n    JUMP     e\nb7:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      0\n    OUTBOX\n    JUMP     e\nb8:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    OUTBOX\n    JUMP     e\nb9:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      3\n    OUTBOX\n    JUMP     e\n\n"
});