<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'images',
        'quantity',
        'category_id',
        'brunch_id',
        'store_id',
        'created_by',

    ];


 public function store(){
    return  $this->belongsTo(store::class);
 } 

public function category(){
   return  $this->belongsTo(Category::class);
}

public function brunch(){
    return  $this->belongsTo(Brunch::class);
 }

 public function create_product_seller()
 {
     return $this->belongsTo(SellerMan::class);
 }


};
