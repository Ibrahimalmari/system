<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;



    public function seller(){
        $this->belongsTo(SellerMan::class);
    }

    public function product(){
        $this->hasMany(Product::class , 'storeproducts');
    }

}
