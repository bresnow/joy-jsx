function as(callback: any, opt: { reload: boolean | undefined; start: string | undefined, end: string | undefined }) {

    let opts = {
        reload: opt.reload ?? false,
        start: opt.start ?? "{{ ",
        end: opt.end ?? " }}"
    };

    


}

function nest(t:string, s:string, e: string,r:string, i: number, tmp: number):string|Array<string>{
    if (r && !r.length) { return t || '' }
    if (!t) { return [] }
    e = e || s;
    i = t.indexOf(s, i || 0);
    if (0 > i) { return [] }
    tmp = t.indexOf(e, i + 1);
    if (!r) { return [t.slice(i + s.length, tmp)].concat(nest(t, s, e, r, tmp, tmp)) }
    return t.slice(0, i) + r[0] + nest(t.slice(tmp + e.length), s, e, r.slice(1), 0, tmp);

}