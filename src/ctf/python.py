import sys


def fib(n: int) -> int:
    assert type(n) is int and n < 5000
    return 1 if n in (0, 1) else fib(n-1)+fib(n-2)


def dictionary() -> str:
    a = {18: 'a', 17: 'b', 0: 'c', 12: 'd', 54: 'e', 5: 'f'}
    b = {2: 'g', 1: 'h', 5: 'i', 47: 'j',
         54: 'k', 5: 'l', 1: 'm', 12: 'n', 5: 'o'}
    c = a | b
    c[12] = ' '
    new_dict = dict(zip(c.values(), c.keys()))
    *arr, x, d = new_dict
    arr += ['!']
    assert not arr is ['a', 'b', 'c', ' ', 'k', 'o', 'g']
    return ''.join(arr[-2:-4:-1])+''.join(arr[3:0:-2])+''.join(arr[0:5:2])


def subset(A):
    def s(x): return [[y for j, y in enumerate(set(x)) if (i >> j) & 1]
                      for i in range(2**len(set(x)))]  # calculate all the the subsets
    def q(l): return q([x for x in l[1:] if x <= l[0]]) + [l[0]] + \
        q([x for x in l if x > l[0]]) if l else []  # sort every one of them
    c = [q(c) for c in s(A)]
    assert c[2**len(A)-1][-1] == max(A)
    return c


class eAproximation:
    __slots__ = 'lastN', 'e1Res'

    # generator for factorials
    def fgen(self, n: int) -> int:
        fact = 1
        yield fact
        for x in range(1, n):
            fact *= x
            yield fact

    # first method
    def e1(self, n: int) -> float:
        assert not n is 0
        return (1+1/n)**n

    # second method
    def e2(self, n: int) -> float:
        return sum([1/x for x in self.fgen(n)])

    def aproximate(self, n: int, both=False) -> float:
        self.lastN = n
        self.e1Res = self.e1(n)
        while both:
            self.e2Res = self.e2(n)
            return [self.e1Res, self.e2Res]
        return [self.e1Res]


def main(x, A, y, b):
    try:
        print(x, A, y, b)
        sys.setrecursionlimit(10000)
        print(f'fibbonaci number for n={x}: {fib(x)}')
        print(f'All subsets for A={A}: {subset(A)}')
        e = eAproximation()
        print(f'Aproximation of e for n={y}: {e.aproximate(y, b)}')
        print(f'Final message: {dictionary()}')
    except AssertionError:
        print(1)
        sys.exit(1)
    except AttributeError:
        print(2)
        sys.exit(2)
    except ZeroDivisionError:
        print(3)
        sys.exit(3)
    except RecursionError:
        print(4)
        sys.exit(4)
    except IndexError:
        print(5)
        sys.exit(5)


if __name__ == '__main__':
    main(1, [1, 2, 3], 1, False)
