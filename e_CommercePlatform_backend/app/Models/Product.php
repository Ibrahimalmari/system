<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function store(){
        $this->hasMany(Store::class ,'storeproducts');
    }

    public function category(){
       return  $this->belongsTo(Category::class);
    }

}
