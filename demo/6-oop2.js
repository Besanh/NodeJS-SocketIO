function khoahoc(ten, hocphi)
{
    this.Ten = ten;
    this.Hocphi = hocphi;
}

khoahoc.prototype.mota = function()
{
    console.log('hello '+this.Ten+' '+this.Hocphi);
}

var nodejs = new khoahoc('Khoa hoc NodeJS', 500000);
nodejs.mota();