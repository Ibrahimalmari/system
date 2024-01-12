<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;


    protected $fillable = [
      'name',
      'slug',
      'description',
      'image',
      'created_by',

  ];

    
    public function product(){
      return  $this->hasMany(Product::class);
    }

    public function create_category_seller()
    {
        return $this->belongsTo(SellerMan::class);
    }
    

}
