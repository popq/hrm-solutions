-- HUMAN RESOURCE MACHINE PROGRAM --
-- 32-Inventory-Report - SIZE 72/16 - SPEED 233/393 --

-- so this one runs QUICKLY (223 steps vs. expected 393)
-- but it is LONG (partially b/c no numeric literals; could probably done it slightly quicker) with 72 instructions vs. expected 16.
-- floor registers are used as:
-- 15: count of A
-- 16: count of B
-- 17: count of C
-- 18: count of X
-- 1: reference copy of A
-- 2: reference copy of X
-- 3: reference copy of B
-- 4: reference copy of C
-- 14: current floor tile reference
-- 13: end of populated floor tiles
-- 19: current query reference (because mixed arithmetic is forbidden)
-- I specifically add the right counter to handle the count when blanking out tile 13 to use as a register
-- I could probably do this without blanking 13, by reusing 19, I think

COPYFROM 14
COPYTO 19
COPYTO 18
COPYTO 17
COPYTO 16
COPYTO 15
-- we need one more register here, remove the B at 13, and register it
COPYTO 13
BUMPUP 16
BUMPDN 14
-- oh, and we need to fill 13 with the largest address
BUMPUP 13
BUMPUP 13
BUMPUP 13
BUMPUP 13
BUMPUP 13
BUMPUP 13
BUMPUP 13
BUMPUP 13
BUMPUP 13
BUMPUP 13
BUMPUP 13
BUMPUP 13
BUMPUP 13
loop:
BUMPUP 14
SUB 13
JUMPZ done
COPYFROM [14]
SUB 3
JUMPZ isab
COPYFROM [14]
SUB 1
JUMPZ isaa
COPYFROM [14]
SUB 2
JUMPZ isax
COPYFROM [14]
SUB 4
JUMPZ isac
-- no more letters if we drop through to this: lookup table done
JUMP done
isaa:
BUMPUP 15
JUMP loop
isab:
BUMPUP 16
JUMP loop
isac:
BUMPUP 17
JUMP loop
isax:
BUMPUP 18
JUMP loop
done:
INBOX
COPYTO 19
SUB 0
JUMPZ outb
COPYFROM 19
SUB 1
JUMPZ outa
COPYFROM 19
SUB 2
JUMPZ outx
COPYFROM 19
SUB 4
JUMPZ outc
-- this is weird, might as well fail or give up
JUMP done
outa:
COPYFROM 15
OUTBOX
JUMP done
outb:
COPYFROM 16
OUTBOX
JUMP done
outc:
COPYFROM 17
OUTBOX
JUMP done
outx:
COPYFROM 18
OUTBOX
JUMP done
